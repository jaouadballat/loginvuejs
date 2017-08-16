<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-md-offset-4">
				<h1>Sing in</h1>
					<form @submit.prevent = "login">
						<div class="form-group">
							<input type="email" name="email" placeholder="Email..." class="form-control" v-model="email">
						</div>
						<div class="form-group">
							<input type="password" name="password" placeholder="Password..." class="form-control" v-model="password">
						</div>
						<div class="form-group">
							<button class="btn btn-larg btn-success" 
							type="submit"
							:disabled="!isFormValid">Login</button>
						</div>
					</form>
					If you don't have an account create <router-link tag="a" to="/signup">one</router-link>
				</div>	
			</div>
		</div>
	</div>
</template>
<script>
import firebase from 'firebase'
	export default {
		data () {
			return {
				email: '',
				password: ''
			}
		}, 
		methods: {
			login(){
				firebase.auth().signInWithEmailAndPassword(this.email, this.password)
					.then(user => {
						this.$router.push('/hello')
						console.log('logged in')
					}, err => {
						alert(err.message)
					})
			}
		},
		computed: {
			isFormValid(){
				return this.email !== '' && this.password !== ''
			}
		}
	}
</script>