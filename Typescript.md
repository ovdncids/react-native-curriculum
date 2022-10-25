# React Native Typescript
## Navigation
NavServie.tsx
```tsx
import { useNavigation } from "@react-navigation/native";

export type RootStackParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab1Detail: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export function NavService() {
  const navigation = useNavigation() as Props['navigation'];
  navService.navigation = navigation;
  return <></>;
}

export const navService = {
  navigation: undefined as unknown as Props['navigation']
};
```

```tsx
<NavigationContainer>
  <NavService />
  ...
</NavigationContainer>
```

```tsx
function Tab1Screen({ navigation }: Props) {
```
