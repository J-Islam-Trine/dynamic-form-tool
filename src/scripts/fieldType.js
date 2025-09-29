export const fieldTypes = {
  input: {
    name: 'Input Field',
    icon: '',
    properties: {
      label: { type: 'text', default: '', label: 'Field Label' },
      name: { type: 'text', default: '', label: 'Field Name', required: true },
      type: {
        type: 'select', 
        default: 'text',
        label: 'Input Type',
        options: ['text', 'email', 'password', 'number', 'tel', 'url']
      },
      placeholder: { type: 'text', default: '', label: 'Placeholder' },
      value: { type: 'text', default: '', label: 'Default Value' },
      required: { type: 'checkbox', default: false, label: 'Required' },
      disabled: { type: 'checkbox', default: false, label: 'Disabled' },
      hidden: { type: 'checkbox', default: false, label: 'Hidden' },
      className: { type: 'text', default: '', label: 'CSS Classes' },
      helpText: { type: 'text', default: '', label: 'Help Text' }
    }
  },
  button: {
    name: 'Button',
    icon: '',
    properties: {
      text: { type: 'text', default: 'Submit', label: 'Button Text' },
      type: {
        type: 'select',
        default: 'button',
        label: 'Button Type',
        options: ['button', 'submit', 'reset']
      },
      variant: {
        type: 'select',
        default: 'primary',
        label: 'Button Variant',
        options: ['primary', 'secondary', 'accent', 'ghost', 'link']
      },
      size: {
        type: 'select',
        default: 'md',
        label: 'Button Size',
        options: ['xs', 'sm', 'md', 'lg']
      },
      disabled: { type: 'checkbox', default: false, label: 'Disabled' },
      className: { type: 'text', default: '', label: 'CSS Classes' },
      href: { type: 'text', default: '', label: 'Link URL (if type=link)' }
    }
  }
};