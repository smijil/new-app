import React, { useEffect, useState } from 'react'
import{Bar,Pie} from 'react-chartjs-2'
import {Chart as chartjs} from 'chart.js/auto';
import axios from 'axios';




export default function Contentpage(){
 let [dataEmail,setDataEmail]=useState()
 let [dataContent,setDataContent]=useState()


 const view=async()=>{
  setDataEmail(localStorage.getItem('token-info'))
   axios.get(`/finanicaldata/'${dataEmail}'`)
   .then((res)=>{setDataContent(res.data[0])})
   .catch((err)=>{console.log(err)})
 }
 
 useEffect(()=>{
    console.log(dataContent)
    console.log('data')
    if(dataContent){
      localStorage.setItem('token-balance',dataContent.accountbalance)
      localStorage.setItem('token-expense',dataContent.expense)
      localStorage.setItem('token-income',dataContent.income)
      localStorage.setItem('token-investedamount',dataContent.investedamount)
      localStorage.setItem('token-currentamount',dataContent.currentamount)
    }
    else {
      console.log('data is undefined')
    }
 },[dataContent])



    return(
    <>
    <div>see
    <button onClick={view}>view</button>
    </div>
  
    <div className='div'>
            <div className='bar'>
        <Bar
        data={{
            labels:['balance','expense','income','invested amount','current amount'],
            datasets:[{
                label:'finance bar-graph',
                data: [(dataContent)?localStorage.getItem('token-balance'):1,(dataContent)?localStorage.getItem('token-expense'):1,(dataContent)?localStorage.getItem('token-income'):1,(dataContent)?localStorage.getItem('token-investedamount'):1,(dataContent)?localStorage.getItem('token-currentamount'):1],
                backgroundColor:[
                    'grey','orangered','lightorange','lightpink','green'
                ]
                
            }]
        }}
        height={300}
        width={300}
        main options={{
            maintainAspectRatio:false,

        }
            
        }
        />
    </div>
    <div className='pie'>
    <Pie
    data={{
        labels:['balance','expense','income','invested amount','current amount'],
        datasets:[{
            label:'finance pie chart',
            data:[(dataContent)?localStorage.getItem('token-balance'):1,(dataContent)?localStorage.getItem('token-expense'):1,(dataContent)?localStorage.getItem('token-income'):1,(dataContent)?localStorage.getItem('token-investedamount'):1,(dataContent)?localStorage.getItem('token-currentamount'):1],
            backgroundColor:[
                'paleorange','blue','green','indigo','brown'
            ]
            
        }]
    }}
    height={300}
    width={300}
    
    main options={{
        maintainAspectRatio:false,

    }
        
    }
      />
</div>
    <div className="table">
        <h1 id="h1">Financial table</h1>
      <table>
        <tr>
          <th>Account Balance</th>
          <th>Expense</th>
          <th>Income</th>
          <th>Invested Amount</th>
          <th>Current Amount</th>
          

        </tr>
        <tr>
          <td>{(dataContent)?localStorage.getItem('token-balance'):'no data'}</td>
          <td>{(dataContent)?localStorage.getItem('token-expense'):'no data'}</td>
          <td>{(dataContent)?localStorage.getItem('token-income'):'no data'}</td>
          <td>{(dataContent)?localStorage.getItem('token-investedamount'):'no data'}</td>
          <td>{(dataContent)?localStorage.getItem('token-currentamount'):'no data'}</td>
        </tr>
      </table>
    </div>
        </div>
  
    </>)
    }
