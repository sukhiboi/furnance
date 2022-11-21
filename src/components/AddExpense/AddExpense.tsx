import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';
import {ExpenseMeta} from '../../hooks/useExpenses';

export interface IAddExpense {
  registerExpense: (expense: ExpenseMeta) => void;
}

interface ErrorDetails {
  isInValidInput: boolean;
  errorText: string;
}

const parseExpenseFromInput = (input: string): ExpenseMeta & ErrorDetails => {
  const [amount, ...reasonWords] = input.split(' ');
  const isInValidInput = isNaN(+amount) || reasonWords.length === 0;
  return {
    amount: +amount,
    reason: reasonWords.join(' '),
    isInValidInput,
    errorText: 'Incorrect Format. Amount + Reason',
  };
};

const AddExpense = ({registerExpense}: IAddExpense) => {
  const DEFAULT_PLACEHOLDER = 'Now what???';
  const [text, setText] = useState('');
  const [placeholder, setPlaceholder] = useState(DEFAULT_PLACEHOLDER);
  const [error, setError] = useState(false);
  const onPress = () => {
    const {isInValidInput, errorText, ...expense} = parseExpenseFromInput(text);
    isInValidInput
      ? (() => {
          setPlaceholder(errorText);
        })()
      : (() => {
          registerExpense(expense);
          setPlaceholder(DEFAULT_PLACEHOLDER);
        })();
    setText('');
    setError(isInValidInput);
  };
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onChangeText={setText}
        defaultValue={text}
        placeholderTextColor={error ? '#ff615d' : '#333'}
        style={[styles.input]}
      />
      <Button title={'Add'} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default AddExpense;
