import React from 'react'

function RedesContacto() {
    return (
        <>
            <div className="container-contacto">
                <h1>Redes sociales</h1>
                <div className="item-contacto">
                    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.2 0H4.8C3.52696 0 2.30606 0.452877 1.40589 1.259C0.505713 2.06513 0 3.15847 0 4.29851V18.6269C0 19.7669 0.505713 20.8602 1.40589 21.6664C2.30606 22.4725 3.52696 22.9254 4.8 22.9254H27.2C28.473 22.9254 29.6939 22.4725 30.5941 21.6664C31.4943 20.8602 32 19.7669 32 18.6269V4.29851C32 3.15847 31.4943 2.06513 30.5941 1.259C29.6939 0.452877 28.473 0 27.2 0ZM4.8 2.86567H27.2C27.6243 2.86567 28.0313 3.01663 28.3314 3.28534C28.6314 3.55405 28.8 3.9185 28.8 4.29851L16 11.2907L3.2 4.29851C3.2 3.9185 3.36857 3.55405 3.66863 3.28534C3.96869 3.01663 4.37565 2.86567 4.8 2.86567ZM28.8 18.6269C28.8 19.0069 28.6314 19.3713 28.3314 19.64C28.0313 19.9087 27.6243 20.0597 27.2 20.0597H4.8C4.37565 20.0597 3.96869 19.9087 3.66863 19.64C3.36857 19.3713 3.2 19.0069 3.2 18.6269V7.56537L15.168 14.1134C15.4112 14.2392 15.6871 14.3054 15.968 14.3054C16.2489 14.3054 16.5248 14.2392 16.768 14.1134L28.8 7.56537V18.6269Z" fill="black" />
                    </svg>

                    <span className="texto-contacto">perrocomunitario@gmail.com</span>
                </div>
                <div className="item-contacto">
                    <svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2045 5.31204H18.5634V0.224048C16.9371 0.0726031 15.3031 -0.00216685 13.668 4.77825e-05C8.80825 4.77825e-05 5.48506 2.65604 5.48506 7.52004V11.712H0V17.408H5.48506V32H12.06V17.408H17.5272L18.349 11.712H12.06V8.08004C12.06 6.40004 12.5602 5.31204 15.2045 5.31204Z" fill="black" />
                    </svg>

                    <span className="texto-contacto face">Perro comunitario tigre</span>
                </div>
                {/* <div className="item-contacto">
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.9902 1.67765C31.9904 1.4512 31.9225 1.22876 31.7935 1.03298C31.6644 0.8372 31.4788 0.675071 31.2555 0.563106C31.0323 0.451141 30.7794 0.39334 30.5226 0.39559C30.2657 0.397839 30.0142 0.460059 29.7935 0.575912C28.9424 1.02255 28.0261 1.36459 27.07 1.59255C25.7046 0.559544 23.9631 -0.0057335 22.1639 4.38505e-05C20.1901 0.00204717 18.2944 0.680272 16.8771 1.8915C15.4599 3.10274 14.632 4.75216 14.5683 6.4915C10.6771 5.94441 7.15043 4.15378 4.66076 1.46105C4.51075 1.30059 4.31918 1.17428 4.10219 1.09279C3.8852 1.01129 3.64917 0.976999 3.414 0.992797C3.17896 1.00986 2.95217 1.07714 2.75325 1.18883C2.55433 1.30052 2.38925 1.45324 2.27231 1.6338C1.67253 2.55661 1.32807 3.59113 1.26688 4.65334C1.20569 5.71555 1.4295 6.77552 1.92014 7.74715L1.91731 7.74965C1.69679 7.8694 1.5148 8.03702 1.38875 8.23649C1.2627 8.43597 1.1968 8.66061 1.19736 8.88895C1.19469 9.07732 1.2075 9.2656 1.2357 9.45233C1.38422 11.0654 2.19508 12.5754 3.51624 13.699C3.42661 13.8495 3.37191 14.0143 3.35533 14.1837C3.33875 14.3531 3.36062 14.5237 3.41967 14.6856C3.99566 16.2677 5.22056 17.6035 6.85468 18.4314C5.19446 18.9975 3.40183 19.1948 1.63472 19.0061C1.30765 18.9699 0.976351 19.0328 0.695156 19.1845C0.413962 19.3361 0.199572 19.5675 0.0871541 19.8407C-0.0252638 20.1139 -0.0290344 20.4127 0.0764605 20.688C0.181955 20.9633 0.390452 21.1989 0.667749 21.356C3.70693 23.0818 7.24558 23.9994 10.8606 23.999C14.96 24.0396 18.9598 22.8847 22.2377 20.7137C25.5156 18.5428 27.8879 15.4776 28.9855 11.995C29.4989 10.478 29.761 8.90343 29.7637 7.32025C29.7637 7.23637 29.7637 7.14999 29.7623 7.06361C30.5215 6.34175 31.1096 5.49353 31.4922 4.56868C31.8747 3.64382 32.0441 2.66095 31.9902 1.67765V1.67765ZM27.1821 5.79536C26.9419 6.0458 26.8204 6.36817 26.8427 6.69553C26.8569 6.90706 26.8555 7.11988 26.8555 7.32025C26.8525 8.65809 26.6301 9.98851 26.1952 11.2702C25.2987 14.2335 23.3003 16.8457 20.52 18.6887C17.7397 20.5317 14.3383 21.4987 10.8606 21.4349C9.61134 21.4353 8.3664 21.3058 7.15152 21.0493C8.70072 20.6092 10.1492 19.9305 11.43 19.0449C11.6659 18.8812 11.8385 18.6571 11.9242 18.4034C12.0099 18.1497 12.0045 17.8788 11.9086 17.628C11.8128 17.3771 11.6313 17.1586 11.389 17.0023C11.1466 16.846 10.8554 16.7596 10.5552 16.7551C9.34662 16.7385 8.19251 16.309 7.33605 15.557C7.55332 15.5206 7.76917 15.4756 7.98359 15.4217C8.29769 15.3429 8.57256 15.1732 8.76394 14.9399C8.95532 14.7066 9.05208 14.4233 9.03864 14.1356C9.02519 13.8479 8.90232 13.5726 8.68982 13.3539C8.47731 13.1353 8.18753 12.9861 7.86715 12.9303C7.1656 12.8082 6.50546 12.545 5.93803 12.1613C5.3706 11.7777 4.91117 11.2838 4.59545 10.7181C4.85824 10.7497 5.12271 10.7694 5.38781 10.7769C5.70274 10.7811 6.01102 10.6969 6.26808 10.5364C6.52513 10.376 6.71764 10.1476 6.81776 9.88428C6.9137 9.6186 6.90876 9.33259 6.8037 9.0696C6.69863 8.80662 6.49917 8.58101 6.23556 8.42699C5.59597 8.05133 5.07206 7.54166 4.71073 6.94365C4.34941 6.34563 4.16196 5.67794 4.16518 5.00037C4.16518 4.91525 4.16802 4.83011 4.1737 4.74623C7.43269 7.42596 11.6598 9.00565 16.1103 9.20698C16.335 9.21479 16.5587 9.17748 16.7646 9.09788C16.9705 9.01829 17.1532 8.89848 17.2989 8.74751C17.4431 8.59508 17.5452 8.41522 17.5972 8.22209C17.6492 8.02895 17.6496 7.82782 17.5984 7.63452C17.5153 7.32858 17.4728 7.01514 17.472 6.70054C17.4734 5.60382 17.9681 4.55236 18.8477 3.77687C19.7273 3.00137 20.9199 2.56519 22.1638 2.56403C22.8038 2.56252 23.4372 2.678 24.024 2.90319C24.6108 3.12837 25.1383 3.45836 25.5732 3.87234C25.7409 4.03142 25.952 4.15002 26.1864 4.21686C26.4208 4.28371 26.6706 4.29658 26.9123 4.25424C27.5096 4.15175 28.0983 4.01372 28.6745 3.8411C28.2815 4.55002 27.7793 5.20766 27.1821 5.79536V5.79536Z" fill="black" />
                    </svg>

                    <span className="texto-contacto">@pcomunitarioong</span>
                </div> */}
                <div className="item-contacto">
                    <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.544 4.95761C24.1643 4.95761 23.793 5.05845 23.4773 5.24738C23.1616 5.43631 22.9155 5.70485 22.7702 6.01903C22.6248 6.33321 22.5868 6.67892 22.6609 7.01245C22.735 7.34599 22.9178 7.65235 23.1864 7.89282C23.4549 8.13328 23.797 8.29704 24.1694 8.36338C24.5419 8.42972 24.9279 8.39567 25.2788 8.26554C25.6296 8.1354 25.9294 7.91502 26.1404 7.63226C26.3514 7.34951 26.464 7.01708 26.464 6.67701C26.464 6.221 26.2617 5.78366 25.9016 5.46121C25.5416 5.13876 25.0532 4.95761 24.544 4.95761ZM31.904 8.42507C31.8729 7.23625 31.6243 6.06004 31.168 4.94328C30.7612 3.98777 30.128 3.12255 29.312 2.40716C28.5197 1.67273 27.5513 1.10927 26.48 0.759403C25.2362 0.33838 23.9214 0.110629 22.592 0.0859701C20.896 -8.00659e-08 20.352 0 16 0C11.648 0 11.104 -8.00659e-08 9.408 0.0859701C8.07864 0.110629 6.76375 0.33838 5.52 0.759403C4.45068 1.11281 3.48309 1.67579 2.688 2.40716C1.86788 3.11667 1.23868 3.98391 0.848 4.94328C0.377857 6.05709 0.123536 7.23461 0.0959999 8.42507C-8.9407e-08 9.94388 0 10.431 0 14.3284C0 18.2257 -8.9407e-08 18.7128 0.0959999 20.2316C0.123536 21.4221 0.377857 22.5996 0.848 23.7134C1.23868 24.6728 1.86788 25.54 2.688 26.2496C3.48309 26.9809 4.45068 27.5439 5.52 27.8973C6.76375 28.3183 8.07864 28.5461 9.408 28.5707C11.104 28.6567 11.648 28.6567 16 28.6567C20.352 28.6567 20.896 28.6567 22.592 28.5707C23.9214 28.5461 25.2362 28.3183 26.48 27.8973C27.5513 27.5474 28.5197 26.984 29.312 26.2496C30.1316 25.5368 30.7653 24.6708 31.168 23.7134C31.6243 22.5967 31.8729 21.4205 31.904 20.2316C31.904 18.7128 32 18.2257 32 14.3284C32 10.431 32 9.94388 31.904 8.42507ZM29.024 20.0597C29.0124 20.9692 28.8284 21.8704 28.48 22.7248C28.2245 23.3483 27.8142 23.9118 27.28 24.3725C26.761 24.8461 26.1332 25.2128 25.44 25.4472C24.4859 25.7592 23.4796 25.9239 22.464 25.9343C20.864 26.006 20.272 26.0203 16.064 26.0203C11.856 26.0203 11.264 26.0203 9.664 25.9343C8.60943 25.952 7.55935 25.8066 6.56 25.5045C5.89725 25.2581 5.29817 24.8924 4.8 24.4298C4.26894 23.9695 3.86375 23.4056 3.616 22.7821C3.22537 21.9154 3.00871 20.9938 2.976 20.0597C2.976 18.6269 2.88 18.0967 2.88 14.3284C2.88 10.56 2.88 10.0299 2.976 8.59702C2.98317 7.66718 3.17272 6.74571 3.536 5.87463C3.81768 5.26984 4.25002 4.73073 4.8 4.29851C5.2861 3.80585 5.88686 3.41458 6.56 3.15224C7.53528 2.83708 8.5632 2.67235 9.6 2.66507C11.2 2.66507 11.792 2.5791 16 2.5791C20.208 2.5791 20.8 2.5791 22.4 2.66507C23.4156 2.67551 24.4219 2.84023 25.376 3.15224C26.1031 3.39389 26.7557 3.78677 27.28 4.29851C27.8043 4.73864 28.214 5.27675 28.48 5.87463C28.8356 6.74713 29.0197 7.66822 29.024 8.59702C29.104 10.0299 29.12 10.56 29.12 14.3284C29.12 18.0967 29.104 18.6269 29.024 20.0597ZM16 6.97791C14.3773 6.98074 12.7919 7.41425 11.4442 8.22364C10.0966 9.03304 9.04701 10.182 8.42821 11.5254C7.80942 12.8687 7.64916 14.3462 7.96767 15.7711C8.28618 17.196 9.06918 18.5044 10.2177 19.531C11.3663 20.5575 12.8288 21.2561 14.4206 21.5386C16.0123 21.8211 17.6619 21.6747 19.1607 21.1179C20.6596 20.5611 21.9406 19.619 22.8418 18.4106C23.743 17.2021 24.224 15.7815 24.224 14.3284C24.2261 13.3613 24.0147 12.4035 23.602 11.5099C23.1892 10.6163 22.5833 9.80462 21.819 9.12151C21.0547 8.43839 20.1471 7.89733 19.1485 7.52945C18.1498 7.16157 17.0798 6.97413 16 6.97791ZM16 19.0997C14.9462 19.0997 13.9161 18.8199 13.0399 18.2956C12.1637 17.7713 11.4808 17.0261 11.0776 16.1543C10.6743 15.2824 10.5688 14.3231 10.7744 13.3975C10.98 12.472 11.4874 11.6218 12.2325 10.9545C12.9777 10.2872 13.927 9.8328 14.9606 9.64869C15.9941 9.46459 17.0654 9.55908 18.0389 9.92021C19.0125 10.2813 19.8446 10.8929 20.4301 11.6775C21.0155 12.4622 21.328 13.3847 21.328 14.3284C21.328 14.9549 21.1902 15.5754 20.9224 16.1543C20.6547 16.7332 20.2622 17.2591 19.7675 17.7022C19.2727 18.1453 18.6854 18.4967 18.0389 18.7365C17.3925 18.9763 16.6997 19.0997 16 19.0997Z" fill="black" />
                    </svg>
                    <span className="texto-contacto">@perrocomunitarioong</span>
                </div>

                {/* <p className="rrss">perrocomunitario@gmail.com</p>
                <p className="rrss">Perro comunitario tigre</p>
                <p className="rrss">@pcomunitarioong</p>
                <p className="rrss">@perrocomunitarioong</p> */}
            </div>
        </>
    )
}

export default RedesContacto
