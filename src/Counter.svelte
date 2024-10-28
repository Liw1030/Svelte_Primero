<!-- Aqui es donde mostramos la api del componente-->
<script>
	export let initialCounter = 5;
	let contador = initialCounter


	function handleClick(){
		contador++
	}
</script>

<main>
	<button on:click={handleClick}>Incremetar</button>
	<span>{contador}</span>
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	span {
		color: #9331d9;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>