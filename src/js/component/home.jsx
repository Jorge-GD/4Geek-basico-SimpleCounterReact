import React, { Fragment, useState } from "react";
import Counter from "./counter.jsx";

function Home() {
	return (
		<Fragment>
			<div className=" box ">
				<div className=" box-clock">
					<div className=" icon-clock">
						<i className="far fa-clock"></i>
					</div>
					<div className=" mini-card thousands ">
						<Counter delay={1000} start={0} />
					</div>
					<div className=" mini-card hundreds ">
						<Counter delay={100} start={0} />
					</div>
					<div className=" mini-card tens ">
						<Counter delay={10} start={0} />
					</div>
					<div className="mini-card unit ">
						<Counter delay={1} start={0} />
					</div>
				</div>
				<div className=" cat ">
					<div className=" cat__body " />
					<div className=" cat__tail " />
					<div className=" cat__head " />
				</div>
				<h2>
					El gato es un mero regalo visual, ya que realmente no se me
					ocurria nada y voy mal de tiempo
				</h2>
			</div>
		</Fragment>
	);
}

export default Home;
