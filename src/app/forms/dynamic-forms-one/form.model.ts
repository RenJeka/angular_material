import {
	DynamicFormModel,
	DynamicCheckboxModel,
	DynamicInputModel,
	DynamicRadioGroupModel
} from "@ng-dynamic-forms/core"

export const MY_DYNAMIC_FORM_MODEL: DynamicFormModel = [
	new DynamicInputModel({
		id: 'myInput1',
		label: 'My Input-1',
		maxLength: 42,
		placeholder: 'placeholder my input-1'
	}),
	new DynamicRadioGroupModel({
		id: 'sampleRadioGroup',
		label: 'Sample Radio Group',
		options: [
			{
				label: 'Option 1',
				value: 'option-1'
			},
			{
				label: 'Option 2',
				value: 'option-2'
			},
			{
				label: 'Option 3',
				value: 'option-3'
			},
		],
		value: 'option-3'
	}),
	new DynamicCheckboxModel({
		id: 'sampleCheckbox',
		label: 'I agree'
	})
];