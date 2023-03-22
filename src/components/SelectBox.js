import React, {Fragment} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import ArrowIcon from "assets/icons/ArrowDown=Dark.svg";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SelectBox({options, selected, setSelected}) {

    return (<Listbox value={selected} onChange={setSelected}>
        {({open}) => (<>
            <div className="relative">
                <Listbox.Button
                    className="relative w-full cursor-default rounded-md !cursor-pointer bg-white py-[9px] pl-[16px] pr-10 text-left text-[#A3A3A3] ring-[1px] ring-inset ring-black focus:outline-none sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                        <span className="block truncate">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-4">
                        <img src={ArrowIcon} alt="arrow"
                             className={`transition-all duration-300 origin-center ${open && '-rotate-180'}`}/>
                    </span>
                </Listbox.Button>

                <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black  focus:outline-none sm:text-sm">
                        {options.map((option, index) => (<Listbox.Option key={index}
                            className={({active}) => classNames(active ? 'bg-primary text-white' : 'text-[#A3A3A3]', 'relative cursor-default select-none py-2 pl-3 pr-9')}
                            value={option}
                        >
                            {({selected, active}) => (<>
                                <div className={"flex items-center"}>
                                    <span className={classNames(selected ? 'font-bold' : 'font-normal', 'block truncate')}>
                                        {option.name}
                                    </span>
                                </div>
                            </>)}
                        </Listbox.Option>))}
                    </Listbox.Options>
                </Transition>
            </div>
        </>)}
    </Listbox>)
}
