<template>
<div class="container">
  <div class="canvas" id="js-canvas"></div>
  <div id="js-properties-panel"></div>
  <ul class="buttons">
      <li>
        <a ref="saveDiagram" href="javascript:" title="保存为bpmn">保存为bpmn</a>
      </li>
    </ul>
</div>
</template>

<script>
import BpmnModeler from '@/components/bpmn/bpmn-js/lib/Modeler';
import defaultBpmn from '@/components/bpmn/resources/default.diagram.bpmn'
import propertiesPanelModule from '@/components/bpmn/bpmn-js-properties-panel';
import propertiesProviderModule from '@/components/bpmn/bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import '@/components/bpmn/bpmn-js/dist/assets/diagram-js.css'
import '@/components/bpmn/bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import '@/components/bpmn/bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import '@/components/bpmn/bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import '@/components/bpmn/bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'
export default {
  data(){
    return {
      bpmnModeler:null
    }
  },
  mounted(){
    this.bpmnModeler = new BpmnModeler({
      container: '#js-canvas',
      propertiesPanel: {
        parent: '#js-properties-panel'
      },
      additionalModules: [
        propertiesPanelModule,
        propertiesProviderModule
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });
    this.bpmnModeler.importXML(defaultBpmn, err=>{
      if(!err){
        const downloadLink = this.$refs.saveDiagram
        this.bpmnModeler.on('commandStack.changed', ()=> {
        this.saveDiagram((err, xml)=> {
          this.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml)
        })
      })
      }
    })
  },
  methods:{
    saveDiagram(done) {
      // 把传入的done再传给bpmn原型的saveXML函数调用
      this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
        done(err, xml)
      })
    },
    setEncoded(link, name, data) {
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data)
      // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
      console.log(link, name, data)
      let xmlFile = new File([data], 'test.bpmn')
      //   console.log(xmlFile)
      if (data) {
        link.className = 'active'
        link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
        link.download = name
      }
    }
  }
}
</script>

<style scoped>
.container{
  margin:0;
  padding:0;
  height:100%;
  width:100%;
  position:relative;
}

.canvas {
  width: 100%;
  height: 100%;
}
.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}

#js-properties-panel {
    position: absolute;
    top: 0;
    right: 0;
    overflow:hidden;
}

.buttons {
  position: absolute;
  left: 20px;
  bottom: 20px;
}
.buttons li {
  display: inline-block;
  margin: 5px;
}
.buttons li a {
  color: #999;
  background: #eee;
  cursor: not-allowed;
  padding: 8px;
  border: 1px solid #ccc;
  text-decoration: none;
}
.buttons li a.active {
  color: #333;
  background: #fff;
  cursor: pointer;
}
</style>
