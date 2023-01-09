# DatePicker
* https://github.com/react-native-datetimepicker/datetimepicker

```js
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

function DatePicker() {
  const [date, setDate] = useState(new Date());
  return (
    <View>
      {Platform.OS === 'ios' ? (
        <DateTimePicker
          style={{width: 100, height: 50}}
          value={date}
          mode='date'
          onChange={(event, value) => setDate(value)}
          locale='ko-KR'
        />
      ) : (
        <Text
          onPress={() => {
            DateTimePickerAndroid.open({
              value: date,
              mode: 'date',
              onChange: (event, value) => setDate(value)
            })
          }}
        >{date.toLocaleDateString()}</Text>
      )}
    </View>
  );
}

export default DatePicker;
```
