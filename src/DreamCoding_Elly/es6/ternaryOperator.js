{
    const isCat = true;
    {
        let component;
        if(isCat){
            component = 'Dog';
        } else {
            component = 'Cat';
        }
        console.log(component);
    }
    {
        const component = isCat ? 'True Dog' : 'False Cat';
        console.log(component);
    }
}