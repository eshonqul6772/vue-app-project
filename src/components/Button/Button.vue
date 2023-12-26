<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
}
</script>

<style>
.btn{
  padding:7px 10px;
  border-radius:5px;
  outline:0;
  border: 0;
  cursor:pointer;
  transition: all 0.3s ease-out;
}

.btn:hover{
  transform: scale(1.06);
}
</style>
