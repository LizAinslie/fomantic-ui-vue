<template>
	<i :class="classes"></i>
</template>

<script>
export default {
	name: 'Icon',
	props: {
		name: {
			type: String,
			required: true,
		},
		disabled: Boolean,
		loading: Boolean,
	},
	computed: {
		classes: {
			get() {
				const classes = {
					disabled: this.disabled,
					loading: this.loading,
				};

				classes[this.name] = true;
				classes.icon = true;

				return classes;
			},
		},
	},
};
</script>

<style scoped></style>
