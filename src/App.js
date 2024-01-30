import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/customHooks/withoutCustomHooks';
import MyComponent from './components/customHooks/useCustomHook';
import MyComponent2 from './components/customHooks/useCustomHook';
import HigherOrderComponent from './components/higherOrderComponent/higherOrderComponent';
import HOC from './components/higherOrderComponent/higherOrderComponent';
import Layout from './components/layout/layout';
import layout from './components/layout/layout';
import MyForm from './components/layout/sitesWithPages';
import MyFormObj from './components/layout/sitesWithPagesWithLayout';
import Carousel from './components/layout/carousel'

import UserDetails from './components/layout/userdetailsLayout'
import img66873 from './image/img66873.jpg'
import Ebb from './image/Ebb-Tide-2-600x400.jpg'
import img80357 from './image/img80357.jpg'
import img148645 from './image/img148645.jpg'
import img152529 from './image/img152529.jpg'
import Page from './components/shareKode'
import Timer from './components/customHooks/excercise'
import Timer2 from './components/higherOrderComponent/excercise'
function App() {
  return (
    <div className="App">
 
      {/* <Page.Page1 />
      <Page.Page2 /> */}

      {/* <LayoutComponent></LayoutComponent> */}
      {/* <MyComponent.MyComponent></MyComponent.MyComponent>
      <MyComponent2.MyComponent2></MyComponent2.MyComponent2> */}
      {/* <Timer.Clock />
      <Timer.NewsTicker items={['hello', 'nice', 'good']} /> */}

      {/* <HigherOrderComponent></HigherOrderComponent> */}
      {/* <HOC.ListItems></HOC.ListItems>
      <HOC.Screen></HOC.Screen> */}
      {/* <Timer2.Clock />
      <Timer2.NewsTicker items={['hello', 'nice', 'good']}></Timer2.NewsTicker> */}

      {/* <Layout.Page1></Layout.Page1>
      <layout.Page2></layout.Page2> */}
      {/* <MyForm></MyForm> */}
      {/* <MyFormObj.MyForm2>
        <MyFormObj.UserDetails />
        <MyFormObj.SelectHobbies />
        <MyFormObj.SummaryPage />
      </MyFormObj.MyForm2> */}


      {/* <Carousel >
        <img src={img152529}></img>
        <img src={Ebb} />
        <img src={img80357} />
        <img src={img66873} />
        <img src={img148645}></img>
      </Carousel> */}


    </div>
  );
}

export default App;
