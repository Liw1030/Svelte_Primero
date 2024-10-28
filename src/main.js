//Punto de entrada de nuestra app
import App from './App.svelte';


//El punto de anclaje para renderizar es document.body 
const app = new App({
	target: document.body,
	props: {
		initialCounter : 5
	}
});

export default app;