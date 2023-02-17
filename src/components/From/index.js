import EL from "../../utils/EL.js";

const From = ()=>{
    const form = EL({
        element: 'div',
        className: 'flex flex-col h-90 w-96 mx-auto mt-40 rounded border-2 border-slate-200 p-4 ',
        children: [
            EL({
                element: 'img',
                className: 'mx-auto h-30 w-30',
                src: 'https://www.digikala.com/statics/img/svg/logo.svg'
            }),
            EL({
                element: 'div',
                className: 'flex flex-col p-1 gap-2',
                children: [
                    EL({
                        element: 'div',
                        className: 'flex flex-col',
                        children: [
                            EL({
                                element: 'span',
                                className: 'text-xl font-bold text-right m-4',
                                innerHTML: 'ورود | ثبت نام'
                            }),
                            EL({
                                element: 'span',
                                className: 'text-xs text-right',
                                innerHTML: '!سلام'
                            }),
                            EL({
                                element: 'span',
                                className: 'text-xs text-right',
                                innerHTML: 'لطفا شماره موبایل یا ایمیل خود را وارد کنید'
                            })
                        ]
                    }),
                    EL({
                        element: 'div',
                        className: 'flex flex-col items-center',
                        children: [
                            EL({
                                element: 'input',
                                type: 'text',
                                className: 'border-2 border-slate-200 outline-cyan-200 p-4 text-right rounded w-full'
                            }),
                            EL({
                                element: 'button',
                                innerHTML: 'ورورد',
                                className: 'text-base text-center m-4 w-full h-12 bg-red-500 rounded text-white'
                            })
                        ]
                    }),
                    EL({
                        element: 'div',
                        className: 'text-xs text-right',
                        children: [
                            EL({
                                element: 'span',
                                innerHTML: 'ورود شما به معنای پذیرش'
                            }),
                            EL({
                                element: 'span',
                                innerHTML: ' شرایط دیچی کالا',
                                className: 'text-cyan-500'
                            }),
                            EL({
                                element: 'span',
                                innerHTML: ' و',
                            }),
                            EL({
                                element: 'span',
                                innerHTML: 'قوانین حریم شخصی ',
                                className: 'text-cyan-500'
                            }),
                            EL({
                                element: 'span',
                                innerHTML: 'است '
                            })
                        ]
                    })
                ]
            })
        ]
    });

    return form;
}

export default From;