import entryFactory from '@/components/bpmn/bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
    is
} from '@/components/bpmn/bpmn-js/lib/util/ModelUtil';


export default function(group, element, translate) {

    // only return an entry, if the currently selected
    // element is a start event.

    if (is(element, 'bpmn:StartEvent')) {
        group.entries.push(entryFactory.textField(translate, {
            id: 'spell',
            description: 'Apply a black magic spell123',
            label: 'Spell',
            modelProperty: 'spell'
        }));
    }
}