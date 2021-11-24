export const getCustomPalettes = function(createAction, translate) {
    return {
        'create.Equipment1': createAction(
            'bpmn:Equipment1', 'activity', 'bpmn-icon-custom bpmn-icon-equipment1',
            translate('Create Equipment1')
        ),
        'create.Equipment2': createAction(
            'bpmn:Equipment2', 'activity', 'bpmn-icon-custom bpmn-icon-equipment2',
            translate('Create Equipment1')
        ),
        'create.Equipment3': createAction(
            'bpmn:Equipment3', 'activity', 'bpmn-icon-custom bpmn-icon-equipment3',
            translate('Create Equipment1')
        ),
        'create.Equipment4': createAction(
            'bpmn:Equipment4', 'activity', 'bpmn-icon-custom bpmn-icon-equipment4',
            translate('Create Equipment1')
        ),
        'create.Equipment5': createAction(
            'bpmn:Equipment5', 'activity', 'bpmn-icon-custom bpmn-icon-equipment5',
            translate('Create Equipment1')
        ),
        'create.ChemistryNode': createAction(
            'bpmn:ChemistryNode', 'activity', 'bpmn-icon-custom bpmn-icon-chemistry',
            translate('Create endpoint')
        ),
        'create.FlaskNode': createAction(
            'bpmn:FlaskNode', 'activity', 'bpmn-icon-custom bpmn-icon-flask',
            translate('Create endpoint')
        ),
        'create.StopNode': createAction(
            'bpmn:StopNode', 'activity', 'bpmn-icon-custom bpmn-icon-stop',
            translate('Create endpoint')
        )
    }
}