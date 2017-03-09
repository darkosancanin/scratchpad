# dotnet-core-web-api
This is a .NET Core WebAPI created for a coding challenge. 

See [OpenAPI definition](open_api_definition.yml) for more information on requirements.  
  

## `/api/reverse-words`

e.g. `/api/reverse-words?sentence=reverse%20me!`

```
esrever em!
```   

## `/api/sort-words`
 
e.g. `/api/sort-words?sentence=sort%20me%20out!!`

```
orst em otu!!
```

## `/api/calculate-after-tax-income`

e.g. `/api/calculate-after-tax-income?annualBaseSalary=85000.55`

```json
{  
   "baseSalary":85000.55,
   "superannuation":8075.05,
   "taxes":{  
      "income":19172.0,
      "medicare":1700.01,
      "total":20872.0
   },
   "postTaxIncome":64128.55
}
```


