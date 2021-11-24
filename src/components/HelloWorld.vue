<template>
<div class="container">
  <div class="canvas" id="js-canvas"></div>
  <div id="js-properties-panel"></div>
  <ul class="buttons">
      <li>
        <a @click="saveDiagram" title="保存为bpmn">保存为bpmn</a>
      </li>
    </ul>
</div>
</template>

<script>
import BpmnModeler from '@/components/bpmn/bpmn-js/lib/Modeler';
import defaultBpmn from '@/components/bpmn/resources/default.diagram.bpmn'
import propertiesPanelModule from '@/components/bpmn/bpmn-js-properties-panel';
import '@/components/bpmn/bpmn-js/dist/assets/diagram-js.css'
import '@/components/bpmn/bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import '@/components/bpmn/bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import '@/components/bpmn/bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import '@/components/bpmn/bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'
import magicPropertiesProviderModule from './provider/magic';
import magicModdleDescriptor from './descriptors/magic';
import bpmnPropertiesProviderModule from '@/components/bpmn/bpmn-js-properties-panel/lib/provider/bpmn';
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
        bpmnPropertiesProviderModule,
        magicPropertiesProviderModule
      ],
      moddleExtensions: {
        magic: magicModdleDescriptor
      }
    });
    this.bpmnModeler.importXML(defaultBpmn)
  },
  methods:{
    saveDiagram(){
      this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
        console.log(xml)
      })
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
  color: #333;
  background: #fff;
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ccc;
  text-decoration: none;
}


</style>
