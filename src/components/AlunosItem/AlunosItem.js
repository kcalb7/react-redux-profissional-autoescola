import React, { Component, Fragment } from "react";
import { sortableElement } from "react-sortable-hoc";

import "../../styles/item.scss";

class AlunosItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
		};
	}

	handleEditing = () => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	handleSave = () => {
		this.props.onEdit(this.props.id, this.input.value);
		this.handleEditing();
	};

	render() {
		const {
			id,
			nome,
			idTurma,
			onDelete,
			turma,
			onEditAlunoClasse,
			getTurma,
		} = this.props;
		const n = !!getTurma ? getTurma(idTurma) : null;
		const { isEditing } = this.state;
		return (
			<div key={id} className="item" title={n ? n.nome : ""}>
				{isEditing ? (
					<Fragment>
						<input
							type="text"
							className="item__input"
							defaultValue={nome}
							ref={(c) => {
								this.input = c;
							}}
							onKeyPress={(event) => {
								if (event.key === "Enter") this.handleSave();
							}}
						/>
						<button
							title="Cancelar edição"
							onClick={this.handleEditing}
							className="item__action item__action--red material-icons"
						>
							cancel
						</button>
						<button
							title="Salvar edição"
							onClick={this.handleSave}
							className="item__action item__action--green material-icons"
						>
							save
						</button>
					</Fragment>
				) : (
					<Fragment>
						<div className="item__text">
							<span>{nome}</span>
							{turma && idTurma && <i className="material-icons">check</i>}
						</div>
						{!turma && (
							<button
								title="Editar aluno"
								onClick={this.handleEditing}
								className="item__action material-icons"
							>
								edit
							</button>
						)}
					</Fragment>
				)}
				{turma ? (
					<button
						title={(idTurma ? "Remover" : "Incluir") + " aluno"}
						onClick={() => {
							onEditAlunoClasse(idTurma ? "-" : "+", id);
						}}
						className="item__action material-icons"
					>
						{idTurma ? "remove" : "add"}
					</button>
				) : (
					<button
						disabled={idTurma || this.state.isEditing}
						title={idTurma ? "Aluno registrado em turma" : "Excluir aluno"}
						onClick={() => {
							if (!idTurma) onDelete(id);
						}}
						className="item__action material-icons"
					>
						delete
					</button>
				)}
			</div>
		);
	}
}

export default sortableElement(AlunosItem);