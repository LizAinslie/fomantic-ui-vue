<template>
	<em :data-emoji="name" :class="classes"></em>
</template>

<script>
export default {
	name: 'Emoji',
	props: {
		name: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			validator: value =>
				['small', 'medium', 'large', 'big'].indexOf(value) !== -1,
		},
		disabled: Boolean,
		loading: Boolean,
		link: Boolean,
	},
	computed: {
		classes: {
			get() {
				let classes = {
					disabled: this.disabled,
					loading: this.loading,
					link: this.link,
				};

				if (this.size) classes[this.size] = true;

				return classes;
			},
		},
	},
};
</script>
