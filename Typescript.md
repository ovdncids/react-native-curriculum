# React Native Typescript
## Navigation
servecies/NavServie.tsx
```tsx
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab1Detail: { a1: string } | undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export const navService = {
  navigation: undefined as unknown as Props['navigation']
};

export default function NavService() {
  const navigation = useNavigation() as Props['navigation'];
  navService.navigation = navigation;
  return <></>;
}
```

App.tsx
```tsx
<NavigationContainer>
  <NavService />
  ...
</NavigationContainer>
```

components/Tab1Screen.tsx
```tsx
import { navService } from '../services/NavService';

function Tab1Screen({ navigation }: Props) {
  return (
    <View>
      <Button
        title="Tab1Detail"
        onPress={() => navigation.navigate('Tab1Detail')}
        // onPress={() => navService.navigation.navigate('Tab1Detail', { a1: 'a1' })}
      />
    </View>
  );
}
```

components/Tab1Detail.tsx
```tsx
function Tab1Detail(props: Props) {
  console.log(props.route.params.a1);
```
