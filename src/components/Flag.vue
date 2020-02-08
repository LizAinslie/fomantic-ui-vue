<template>
	<i :class="classes"></i>
</template>

<script>
export default {
	name: 'Flag',
	props: {
		country: {
			type: String,
			required: true,
		},
	},
	computed: {
		classes: {
			get() {
				const classes = {};
				classes[this.country] = true;
				classes.flag = true;

				return classes;
			},
		},
	},
};
</script>
