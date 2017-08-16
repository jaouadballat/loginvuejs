<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-md-offset-4">
				<h1>Sign up</h1>
					<form @submit.prevent="signup">
						<div class="form-group">
							<input type="email" name="email" placeholder="Email..." class="form-control" v-model="email">
						</div>
						<div class="form-group">
							<input type="password" name="password" placeholder="Password..." class="form-control" v-model="password">
						</div>
						<div class="form-group">
							<button class="btn btn-success"
							 type="submit"
							 :disabled="!isFormValide">Signup</button>
						</div>
					</form>
					If you have already an account try to <router-link tag="a" to="/login">login</router-link>
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
			signup(){
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
					.then(user => {
						alert('user has been created')
						this.$router.push('/login')
					}, err => {
						alert(err)
					})
			}
		},
		computed: {
			isFormValide(){
				return this.email !== '' && this.password !== ''
			}
		}
	}
</script>