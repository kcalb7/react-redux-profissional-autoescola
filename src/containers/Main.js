import React from "react";

const Main = () => (
	<div class="main">
		<div className="main__options">
			<span>Serviços</span>
			<hr />
			<button class="main__options__button">
				<i class="material-icons">menu_book</i>
				<span>Aula Teórica</span>
			</button>
		</div>
		<div className="main__options">
			<span>Cadastros</span>
			<hr />
			<button class="main__options__button">
				<i class="material-icons">groups</i>
				<span>Alunos</span>
			</button>
		</div>
	</div>
);

export default Main;