export const getCustomRenders = function(customerRender) {
    return {
        'bpmn:Equipment1': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/equipment1.png'))
        },
        'bpmn:Equipment2': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/equipment2.png'))
        },
        'bpmn:Equipment3': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/equipment3.png'))
        },
        'bpmn:Equipment4': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/equipment4.png'))
        },
        'bpmn:Equipment5': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/equipment5.png'))
        },
        'bpmn:ChemistryNode': function(parentGfx, element) {
            return customerRender["drawTemplate"](parentGfx, element, '加入<input type="text" value="水"><input type="text" value="5">ml', require('@/assets/chemistry-white.png'), 'bpmn-template-green')
        },
        'bpmn:FlaskNode': function(parentGfx, element) {
            return customerRender["drawTemplate"](parentGfx, element, '定容至<input type="text" value="5">ml', require('@/assets/flask-white.png'), 'bpmn-template-yellow', 160)
        },
        'bpmn:StopNode': function(parentGfx, element) {
            return customerRender["drawTemplate"](parentGfx, element, '暂停<img src="' + require('@/assets/suspend.png') + '">', require('@/assets/suspend-white.png'), 'bpmn-template-black', 110)
        },
    }
}