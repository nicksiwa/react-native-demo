import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {Input, Button} from '@ui-kitten/components';
import {TODO} from '../../redux/actionTypes';

export default function TodoForm({initialValue, handleBackToTodoList}) {
  const dispatch = useDispatch();
  const initailData = {completed: false};

  const {control, errors, handleSubmit, reset} = useForm({
    defaultValues: {
      id: initialValue && initialValue.id,
      title: initialValue && initialValue.title,
      completed: initialValue && initialValue.completed,
    },
  });

  const onSubmit = (data) => {
    if (initialValue) {
      dispatch({
        type: TODO.EDIT_TODO_REQUEST,
        id: initialValue.id,
        payload: {...initialValue, ...data},
      });

      handleBackToTodoList();
    } else {
      dispatch({
        type: TODO.CREATE_TODO_REQUEST,
        payload: {...initailData, ...data},
      });
    }

    reset();
  };

  return (
    <View>
      <Controller
        name="title"
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
