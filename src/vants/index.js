import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
import { Search } from 'vant';
import { Grid, GridItem } from 'vant';
import { Divider } from 'vant';

import { Tabbar, TabbarItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Field } from 'vant';
import { Rate } from 'vant';
import { Button } from 'vant';
import { Stepper } from 'vant';

import { Card } from 'vant';
import { List } from 'vant';

import { Icon } from 'vant';

import { Image } from 'vant';



import { NavBar } from 'vant';


import { Row, Col } from 'vant';

import { Sku } from 'vant';

import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);


export default ()=>{
  Vue.use(Stepper);
  Vue.use(Rate);
    Vue.use(Sku);
    Vue.use(Row).use(Col);
Vue.use(NavBar);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Tab).use(Tabs);
    Vue.use(Swipe).use(SwipeItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Card);
Vue.use(Field);
Vue.use(Button);
Vue.use(List);
Vue.use(Icon);
Vue.use(Image);
}

