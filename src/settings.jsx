    import React, { useState } from 'react';

    const Settings = () => {
    const [activeSubsection, setActiveSubsection] = useState(null);

    const handleSubsectionClick = (subsection) => {
        setActiveSubsection(activeSubsection === subsection ? null : subsection);
    };

    return (
        <div className='bg-gray-200 min-h-screen'>
        <h1 className='flex justify-center  bg-gradient-to-b from-green-900 to-green-500 p-10 text-gray-200 text-xl'>Inställningar</h1>
        <section className='flex flex-col items-center justify-center bg-gray-200 rounded-t-xl '>

            <h2 className='mr-40 mt-10'>Konto</h2>
            <hr class="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>            <ul>
            <li onClick={() => handleSubsectionClick('Mina uppgifter')}>
                Mina uppgifter
                {activeSubsection === 'Mina uppgifter' && (
                <div>
                    Mina uppgifter
                </div>
                )}
            </li>
            <li onClick={() => handleSubsectionClick('Belöningshistorik')}>
                Belöningshistorik
                {activeSubsection === 'Belöningshistorik' && (
                <div>
                    Belöningshistorik
                </div>
                )}
            </li>
            <li onClick={() => handleSubsectionClick('Notifikationer')}>
                Notifikationer
                {activeSubsection === 'Notifikationer' && (
                <div>
                    Notifikationer
                </div>
                )}
            </li>
            </ul>
        </section>
        <section className='flex flex-col items-center justify-center bg-gray-200'>
            <h2 className='mr-40 mt-10'>Support & Om</h2>
            <hr class="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <ul>
            <li onClick={() => handleSubsectionClick('Hjälpcenter')}>
                Hjälpcenter
                {activeSubsection === 'Hjälpcenter' && (
                    <div>
                    Hjälpcenter
                </div>
                )}
            </li>
            <li onClick={() => handleSubsectionClick('Vilkor och policy')}>
                Vilkor och policy
                {activeSubsection === 'Vilkor och policy' && (
                <div>
                    Vilkor och policy
                </div>
                )}
            </li>
            <li onClick={() => handleSubsectionClick('Kontakta oss')}>
                Kontakta oss
                {activeSubsection === 'Kontakta oss' && (
                <div>
                    Kontakta oss
                </div>
                )}
            </li>
            </ul>
        </section>
        </div>
    );
    };

    export default Settings;
