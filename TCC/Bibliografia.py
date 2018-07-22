import xlrd
import sys
import json
import pymongo
from pymongo import MongoClient

client=MongoClient('localhost',27017)
db=client.Bibliografia
account=db.Bibliografia

data=xlrd.open_workbook('Bibliografia.xlsx')
table=data.sheets()[0]

rowstag=table.row_values(0)
nrows=table.nrows

returnData={}
for i in range(1,nrows):
    returnData[i]=json.dumps(dict(zip(rowstag,table.row_values(i))))
    returnData[i]=json.loads(returnData[i])
    account.insert(returnData[i])