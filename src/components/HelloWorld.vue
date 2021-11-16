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
const bpmnXml = require('@/components/bpmn/resources/default.diagram.bpmn')
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
    this.bpmnModeler.importXML(`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <computerNode id="Activity_09tv0mz" name="host">
      <outgoing>Flow_02sqsuc</outgoing>
      <outgoing>Flow_0sy7514</outgoing>
      <outgoing>Flow_0ibsjeq</outgoing>
    </computerNode>
    <endPointNode id="Activity_0f8hwfy" name="endpoint2">
      <incoming>Flow_02sqsuc</incoming>
    </endPointNode>
    <endPointNode id="Activity_1wyum05" name="endpoint1">
      <incoming>Flow_0sy7514</incoming>
    </endPointNode>
    <endPointNode id="Activity_0tqn7ik" name="endpoint3">
      <incoming>Flow_0ibsjeq</incoming>
    </endPointNode>
    <sequenceFlow id="Flow_02sqsuc" sourceRef="Activity_09tv0mz" targetRef="Activity_0f8hwfy" />
    <sequenceFlow id="Flow_0sy7514" sourceRef="Activity_09tv0mz" targetRef="Activity_1wyum05" />
    <sequenceFlow id="Flow_0ibsjeq" sourceRef="Activity_09tv0mz" targetRef="Activity_0tqn7ik" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNEdge id="Flow_0ibsjeq_di" bpmnElement="Flow_0ibsjeq">
        <omgdi:waypoint x="204" y="460" />
        <omgdi:waypoint x="300" y="460" />
        <omgdi:waypoint x="300" y="594" />
        <omgdi:waypoint x="396" y="594" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0sy7514_di" bpmnElement="Flow_0sy7514">
        <omgdi:waypoint x="204" y="460" />
        <omgdi:waypoint x="300" y="460" />
        <omgdi:waypoint x="300" y="344" />
        <omgdi:waypoint x="396" y="344" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_02sqsuc_di" bpmnElement="Flow_02sqsuc">
        <omgdi:waypoint x="204" y="460" />
        <omgdi:waypoint x="406" y="460" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_09tv0mz_di" bpmnElement="Activity_09tv0mz">
        <omgdc:Bounds x="156" y="436" width="48" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1wyum05_di" bpmnElement="Activity_1wyum05">
        <omgdc:Bounds x="396" y="316" width="48" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0tqn7ik_di" bpmnElement="Activity_0tqn7ik">
        <omgdc:Bounds x="396" y="566" width="48" height="48" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0f8hwfy_di" bpmnElement="Activity_0f8hwfy">
        <omgdc:Bounds x="406" y="436" width="48" height="48" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`, err=>{
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
