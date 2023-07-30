let sales=[34000,32000,60000,42500,52000];
for(i=0;i<sales.length;i++)
{
    for(j=i+1;j<sales.length;j++)
    {
        if(sales[i]<sales[j])
        {
            temp=sales[i];
            sales[i]=sales[j];
            sales[j]=temp;
        }
    }
}
console.log("Sorted Array:",sales)


