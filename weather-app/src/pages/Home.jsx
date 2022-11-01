import React, { useRef } from 'react'
import { Button, HStack, Input, Text, VStack, Select } from '@chakra-ui/react';
import Typed from 'react-typed';
import { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDataApi, currentApiMapper } from '../store/current/current.action';
import { useEffect } from 'react';
import { forecastApiMapper, getForecastDataApi } from '../store/forecast/forecast.action';
import Place from '../components/Place';
import Weather from '../components/Weather';
import axios from 'axios';
import Astro from '../components/Astro';
// const getCurrentApi = async (place) => {
//   const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=06a0d6e010d242b4816152843222810&q=${place}&aqi=no`);
//   // console.log("Inside Api mapper data",res.data);
//   return res.data
// };
// const updateCurrent = async (location) => {
//   const res = await axios.post(`http://localhost:8080/current`, location)
//   return res.data;

// }
const Home = () => {
  const [place, setPlace] = useState("");
  const [change, setChange] = useState("current");
  const [day, setDay] = useState('1');
  const [checkAstro, setCheckAstro] = useState(false);
  //For current 
  const currentapiData = useSelector((store) => store.currentData.data);
  const currentMapData = useSelector((store) => store.currentData.mappedData);
  const loading1 = useSelector((store) => store.currentData.loading);
  const error1 = useSelector((store) => store.currentData.error);
  //For Forecast
  const forecastapiData = useSelector((store) => store.forecastData.data);
  const forecastMapData = useSelector((store) => store.forecastData.mappedData);
  const loading2 = useSelector((store) => store.forecastData.data);
  const error2 = useSelector((store) => store.forecastData.data);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (change == 'current') {
      dispatch(getCurrentDataApi(place))
      // .then((res) => {
      //   // dispatch(currentApiMapper(currentapiData.location));
      // })
    } else {
      dispatch(getForecastDataApi(place, day)).then(() => { })
      // if (forecastapiData.forecast) {
      //   dispatch(forecastApiMapper(forecastapiData.forecast.forecastday[0]['astro']))
      // setTimeout(() => {
      //   setCheckAstro(true)
      // }, 3000);
      // }
    }
  }
  //****************UseEffect for currentData*****************
  useEffect(() => {
    console.log(currentapiData);
    console.log(currentMapData, 'Mapped Data');
  }, [currentMapData]);
  //****************UseEffect for ForecastData****************
  useEffect(() => {
    if (forecastMapData.forecast) {
      setCheckAstro(true);
      // console.log(forecastapiData.forecast.forecastday[0]['astro'], "check forecast");
    }
  }, [forecastapiData.forecast]);
  return (
    <VStack>
      <Text fontSize={'2rem'} color='#dc143c'>
        <Typed strings={["Weather App",]}
          typeSpeed={120}
          backSpeed={120}
          loop />
      </Text>
      <HStack w={'80%'} justify={'center'}>
        <form style={{ display: 'flex', width: '40%' }} onSubmit={handleSubmit} >
          <Input type={'text'} placeholder={'Enter place name'} onChange={(e) => setPlace(e.target.value)} />
          <IconButton
            colorScheme='orange'
            aria-label='Search database'
            type='submit'
            icon={<AiOutlineSearch style={{ fontSize: '1.8rem' }} />}
          />
        </form>
      </HStack>
      <HStack>
        <Select bg='#ffa366' onChange={(e) => setChange(e.target.value)} >
          <option value='current'>Current</option>
          <option value='forecast'>Forecast</option>
        </Select>
        {
          change == 'current' ? <></> : <Select bg='#ffa366' onChange={(e) => setDay(e.target.value)} >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='2'>7</option>
            <option value='7'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Select>
        }
      </HStack>
      <HStack w={'94%'} justifyContent={'center'}>
        {
          change == 'current' ? <Place location={currentMapData.location} /> : <Place location={forecastMapData.location} />
        }
        <VStack border={'2px solid #ffa366'} borderRadius={'0.5rem'} alignItems={'flex-start'} pl={'1rem'} w={'56%'} h={"395px"} background={'white'}>
          {change == 'current' ? currentMapData.current && <Weather gust_kph={currentMapData.current.gust_kph} pressure_in={currentMapData.current.pressure_in} pressure_mb={currentMapData.current.pressure_mb} temp_c={currentMapData.current.temp_c} wind_kph={currentMapData.current.wind_kph} humidity={currentMapData.current.humidity} cloud={currentMapData.current.cloud} condition={currentMapData.current.condition} /> : forecastMapData.current && <Weather gust_kph={forecastMapData.current.gust_kph} pressure_in={forecastMapData.current.pressure_in} pressure_mb={forecastMapData.current.pressure_mb} temp_c={forecastMapData.current.temp_c} wind_kph={forecastMapData.current.wind_kph} humidity={forecastMapData.current.humidity} cloud={forecastMapData.current.cloud} condition={forecastMapData.current.condition} />
          }

        </VStack>
      </HStack>
      <HStack w={'100%'} justifyContent={"center"}>
        {
          change == 'forecast' ? checkAstro && <Astro astro={forecastMapData.forecast.forecastday[0]['astro']} /> : <></>
        }
      </HStack>
    </VStack>
  )
}

export default Home;