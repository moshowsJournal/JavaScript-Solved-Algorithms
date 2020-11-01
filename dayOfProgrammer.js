function dayOfProgrammer(year) {
    let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let calendar = [];
    months.map((month)=>{
        if(year === 1918 && month === '02'){
           let days_month = [...Array(29).keys()].slice(0,15).map(value=>`${value}_${month}`);
            return calendar.push(...days_month)
        }
        if(month === '02' && year < 1918 && year%4===0 ){
            let days_month = [...Array(30).keys()].filter(value=>value>0).map(value=>`${value}.${month}`)
            return calendar.push(...days_month)
        }
        if((month === '02' && year > 1918 && year%400===0) || (
            month === '02' && year > 1918 && year%4===0 && year%100!==0 
        )){
            let days_month = [...Array(30).keys()].filter(value=>value>0).map(value=>`${value}.${month}`)
            return calendar.push(...days_month)
        }
        if(month === '02'){
            let days_month = [...Array(29).keys()].filter(value=>value>0).map(value=>`${value}.${month}`)
            return calendar.push(...days_month)
        }
        if(['09','04','06','11'].includes(month)){
            let days_month = [...Array(31).keys()].filter(value=>value>0).map(value=>`${value}.${month}`)
            return calendar.push(...days_month)
        }
        let days_month = [...Array(32).keys()].filter(value=>value>0).map(value=>`${value}.${month}`);
        return calendar.push(...days_month)
    });
    let day_month = calendar.filter((data,index)=>{
        return (index+1) === 256;
    });
    return `${day_month}.${year}`
}