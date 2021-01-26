import React from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Input, Button} from '@ui-kitten/components';
import {postTodo} from '../../services';

export default function TodoForm() {
  const initailData = {completed: false};
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data) => postTodo({...data, ...initailData});

  return (
    <View>
      <Controller
        name="title"
        defaultValue=""
        control={control}
        rules={{required: true}}
        render={({onChange, onBlur, value}) => (
          <Input
            value={value}
            onBlur={onBlur}
            onChangeText={(v) => onChange(v)}
            status={errors.title && 'danger'}
            caption={errors.title && 'Required'}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Create</Button>
    </View>
  );
}
