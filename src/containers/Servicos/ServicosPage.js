import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

import { ClassesNew, ClassesList, Error } from "../../components";

class ServicosPage extends Component {
	constructor(props) {
		super(props);
		this.state = { add_turma: false };
	}

	handleAdd = () => {
		this.setState({ add_turma: !this.state.add_turma });
	};

	render() {
		const {
			classes,
			onAddClasses,
			onEditClasses,
			onDeleteClasses,
			onSortEnd,
			onRetryReload,
			history,
			reloadHasError,
			onDefineClasse,
		} = this.props;
		const { add_turma } = this.state;
		return (
			<div>
				<div className="brand">
					<button
						title="Voltar para tela principal"
						className="brand__back material-icons"
						onClick={() => {
							history.push("/");
						}}
					>
						chevron_left
					</button>
					<span>Aula Teórica</span>
					<button
						title="Adicionar nova turma"
						onClick={this.handleAdd}
						className={classnames("add_turma__buton material-icons", {
							"add_turma--transition": add_turma,
						})}
					>
						{add_turma ? "cancel" : "add_circle_outline"}
					</button>
					<hr />
				</div>

				{reloadHasError ? (
					<Error onRetryReload={onRetryReload} />
				) : (
					<Fragment>
						<ClassesNew add_turma={add_turma} onAdd={onAddClasses} />
						<ClassesList
							// onSortEnd={onSortEnd}
							classes={classes}
							onEdit={onEditClasses}
							onDelete={onDeleteClasses}
							onDefineClasse={onDefineClasse}
						/>
					</Fragment>
				)}
			</div>
		);
	}
}

export default withRouter(ServicosPage);
