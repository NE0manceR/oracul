import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import style from './diagram.module.scss';


const Diagram = () => {

	return (
		<div className={`${style.diagram}`}>
			<div className={style.icons_wrap}>
				<img className={style.icon} src="/icons/money-1.svg" alt="img" />
				<img className={style.icon} src="/icons/money-2.svg" alt="img" />
				<img className={style.icon} src="/icons/money-3.svg" alt="img" />
				<img className={style.icon} src="/icons/money-4.svg" alt="img" />
			</div>
			<div className={style.diagram_info}>
				<div className={style.title_wrap}>
					<h2>Product Analytics</h2>
					<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
				</div>
				<div className={style.btn_wrap}>
					<button type='button' className={style.btn}>Analytics proudct</button>
					<button type='button' className={style.btn}>Sell items</button>
					<button type='button' className={style.btn}>Buy buy items</button>
				</div>
				<div className={style.diagram_lines}>
					<img src="/icons/diagram-lines.svg" alt="img" />
				</div>
			</div>
			<div className={style.diagram_info_2}>
				<div className={style.title_wrap}>
					<h2>Daily Retention</h2>
					<span>Lorem ipsum dolor </span>
				</div>
				<div>
					<div className={style.session_wrap}><span>320</span><span> ACTIVE SESSION</span></div>
					<img src="/icons/diagram-lines-blue.svg" alt="img" />
				</div>

				<div>
					<div className={style.session_wrap}>
						<span>649</span><span> ACTIVE SESSION</span>
					</div>
					<img src="/icons/diagram-lines-red.svg" alt="img" />
				</div>
			</div>

		</div>
	)
}

export default Diagram;
