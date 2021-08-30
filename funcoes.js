$(function(){
	function Adicionar(){
		$("#tblCadastro tbody").append(
			"<tr>"+
			"<td><input type='text'/></td>"+
			"<td><input type='date'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><img src='images/save-blk.png' class='btnSalvar'><img src='images/del-blk.png' class='btnExcluir'/></td>"+
			"</tr>");

		$(".btnSalvar").bind("click", Salvar);     
		$(".btnExcluir").bind("click", Excluir);
	};

	function Salvar(){
		var par = $(this).parent().parent(); //tr
		var tdId = par.children("td:nth-child(1)");
		var tdData = par.children("td:nth-child(2)");
		var tdQtde = par.children("td:nth-child(3)");
		var tdPeso = par.children("td:nth-child(4)");
		var tdMetro = par.children("td:nth-child(5)");
		var tdBotoes = par.children("td:nth-child(6)");

		tdId.html(tdId.children("input[type=text]").val());
		tdData.html(tdData.children("input[type=date]").val());
		tdQtde.html(tdQtde.children("input[type=text]").val());
		tdPeso.html(tdPeso.children("input[type=text]").val());
		tdMetro.html(tdMetro.children("input[type=text]").val());
		tdBotoes.html("<img src='images/del-blk.png' class='btnExcluir'/><img src='images/edit-blk.png' class='btnEditar'/>");

		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Editar(){
		var par = $(this).parent().parent(); //tr
		var tdId = par.children("td:nth-child(1)");
		var tdData = par.children("td:nth-child(2)");
		var tdQtde = par.children("td:nth-child(3)");
		var tdPeso = par.children("td:nth-child(4)");
		var tdMetro = par.children("td:nth-child(5)");
		var tdBotoes = par.children("td:nth-child(6)");

		tdId.html("<input type='text' id='txtId' value='"+tdId.html()+"'/>");
		tdData.html("<input type='date'id='txtData' value='"+tdData.html()+"'/>");
		tdQtde.html("<input type='text' id='txtQtde' value='"+tdQtde.html()+"'/>");
		tdPeso.html("<input type='text' id='txtPeso' value='"+tdPeso.html()+"'/>");
		tdMetro.html("<input type='text' id='txtMetro' value='"+tdMetro.html()+"'/>");
		tdBotoes.html("<img src='images/save-blk.png' class='btnSalvar'/><img src='images/del-blk.png' class='btnExcluir'/>");

		$(".btnSalvar").bind("click", Salvar);
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Excluir(){
	    var par = $(this).parent().parent(); //tr
	    par.remove();
	};

	$(".btnEditar").bind("click", Editar);
	$(".btnExcluir").bind("click", Excluir);
	$("#btnAdicionar").bind("click", Adicionar); 

});



