const getposCurs = ()=>{
    if(e.target.selectionStart!==1||e.target.selectionStart!==e.target.value.length){
      const posCurs = e.target.selectionStart=e.target.selectionStart
      return posCurs
    }
  }
  
      // if(posCurs!==1||prevLenght|| nextVal===""){
        //   console.log("Сработал");
        //   e.target.setSelectionRange(posCurs,posCurs)

        // } 
        

          // const k = e.target.value.trim().replace(/[^А-Яа-яЁё]+/g,"" )
        // e.target.value = k  , function(u){ return u.toUpperCase(); }
        
        // const posCurs = e.target.selectionStart
        // console.log(posCurs)  .replace(/[^а-яё\-/']+/g, function(x){ return x.toLowerCase();} )
        // СОЗДАТЬ СТЕЙТ С ОШИБКАМИ  ОН ДОЛЖЕН БЫТЬ ОБЪЕКТОМ В КОТОРЫЙ ЗАПИСЫВАЕТСЯ ПО КЛЮЧУ(CASE) ИМЯ ОШИБКИ 
        // ОБЕКТ С ОШИБКАМИ В КЕЙСЕ ВЫЗЫВАТЬ


        //console.log(tnextVal)
          
        // console.log(e.target.value.length);
        // console.log(e.target.selectionStart ) 
        //if(e.target.value !== prevVal){e.target.selectionStart=e.target.selectionEnd=posCurs}
        //e.target.selectionStart=e.target.selectionEnd=posCurs
        //if(e.target.selectionStart !== e.target.value.length||e.target.selectionStart !== 1 ){e.target.selectionStart=e.target.selectionEnd=posCurs}
        
        
        // const a = e.target.value.length
        // console.log(a);
        //somthing()


            // if(e.target.vaue.trim()==="")return  --- присовоить  каой то переменнной.


            (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))


            preg_match(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u, $item)

            '/
^( - параметр что маска начинается с начала текста
    (
        (  - этот блок отвечает за логин латиницей
            [0-9A-Za-z]{1} - 1й символ только цифра или буква
            [-0-9A-z\.]{1,} - в середине минимум один символ (буква, цифра, _, -, .) (не менее 1 символа)
            [0-9A-Za-z]{1} - последний символ только цифра или буква
        )
        | - параметр "или/или" выбирает блок "латиница" или "кирилица"
        (  - этот блок отвечает за логин кирилицей
            [0-9А-Яа-я]{1} - 1й символ только цифра или буква
            [-0-9А-я\.]{1,} - в середине минимум один символ (буква, цифра, _, -, .) (не менее 1 символа)
            [0-9А-Яа-я]{1} - последний символ только цифра или буква
        )
    )
    @ - обазятельное наличие значка разделяющего логин от домена
    (
        [-0-9A-Za-z]{1,} - блок может состоять из "-", цифр и букв (не менее 1 символа)
        \. - наличие точки в конце блока
    ){1,2} - допускается от 1 до 2 блоков по вышеукащанной маске (mail. , ru.mail.)
    [-A-Za-z]{2,} - блок описывайющий домен вехнего уровня (ru, com, net, aero etc) (не менее 2 символов)
)$ - параметр что маска заканчивается в конце текста
/u - параметр позволяющий работать с кирилицей
'
