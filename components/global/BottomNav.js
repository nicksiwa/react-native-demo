import React from 'react';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';

export default function BottomNav({navigation, state}) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="USERS" />
      <BottomNavigationTab title="POSTS" />
    </BottomNavigation>
  );
}
