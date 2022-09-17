const counters = document.querySelectorAll('.counter')


counters.forEach(counter=>{
    counter.innerText = '0'

    const updatecounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const interval = target/200
        if(c<target){
            counter.innerText = `${Math.ceil(c + interval)}`
            setTimeout(updatecounter,1)
        }
    }
    updatecounter()
})