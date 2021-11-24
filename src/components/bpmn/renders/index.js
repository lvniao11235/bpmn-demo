export const getCustomRenders = function(customerRender) {
    return {
        'bpmn:ComputerNode': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/computer.png'))
        },
        'bpmn:EndPointNode': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/endpoint.png'))
        },
        'bpmn:ChemistryNode': function(parentGfx, element) {
            return customerRender["drawTemplate"](parentGfx, element, '加入<input type="text" value="水"><input type="text" value="5">ml', require('@/assets/chemistry-white.png'))
        },
    }
}