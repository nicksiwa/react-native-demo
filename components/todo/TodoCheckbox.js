import React from 'react';
import {CheckBox} from '@ui-kitten/components';

export default function TodoCheckbox({checked, onChange}) {
  return <CheckBox checked={checked} onChange={onChange} />;
}
