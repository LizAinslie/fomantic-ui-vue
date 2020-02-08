<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'Container',
	props: {
		fluid: Boolean,
		text: Boolean,
		alignment: {
			type: String,
			validator: value =>
				['right', 'left', 'center', 'justified'].indexOf(value) !== -1,
		},
	},
	computed: {
		classes: {
			get() {
				let classes = {
					ui: true,
				};

				if (this.alignment)
					switch (this.alignment) {
						case 'right':
							classes['right aligned'] = true;
							break;
						case 'left':
							classes['left aligned'] = true;
							break;
						case 'center':
							classes['center aligned'] = true;
							break;
						case 'justified':
							classes['justified'] = true;
							break;
						default:
							break;
					}

				classes = {
					...classes,
					fluid: this.fluid,
					text: this.text,
					container: true,
				};

				return classes;
			},
		},
	},
};
</script>
