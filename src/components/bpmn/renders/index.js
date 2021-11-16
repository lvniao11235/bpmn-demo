export const getCustomRenders = function(customerRender) {
    return {
        'bpmn:ComputerNode': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/computer.png'))
        },
        'bpmn:EndPointNode': function(parentGfx, element) {
            return customerRender["drawImage"](parentGfx, element, require('@/assets/endpoint.png'))
        },
    }
}