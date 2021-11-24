export const getCustomPalettes = function(createAction, translate) {
    return {
        'create.ComputerNode': createAction(
            'bpmn:ComputerNode', 'activity', 'bpmn-icon-custom bpmn-icon-computer',
            translate('Create computer')
        ),
        'create.EndPointNode': createAction(
            'bpmn:EndPointNode', 'activity', 'bpmn-icon-custom bpmn-icon-endpoint',
            translate('Create endpoint')
        ),
        'create.ChemistryNode': createAction(
            'bpmn:ChemistryNode', 'activity', 'bpmn-icon-custom bpmn-icon-chemistry',
            translate('Create endpoint')
        )
    }
}