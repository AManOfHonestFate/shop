<template>
  <div class="second-catalogue">
    <img class="image" src="https://s3-alpha-sig.figma.com/img/a5b1/bc2e/30ba8c8c5a993f0f64cb516e538d538b?Expires=1659312000&Signature=AcpHSwMkZzL4NPnD6z5K6gJtLlpxzpSYA1aWCZPQTqE-tllsmEUrqPtjsr~rjVAcgpBAVDOWgsomHNnwZPJO8riObC-enZMbVQbxmwlP2oXzKS737guV7urcGJ64ixYz5aTOadqaoF84iVGoMyql8Js1pPsH7grbTCUF7zG6~tfZWyCqFje84ZHo2eE8wjx3tRzzozPPSN90nQVsjPW3KxZQZbXT06ZaeKczfmT6GYxPKvCATHakmUnffEVOWwFyBO1ZF3cTU7OwdoeJfjvfPDJrVrKaNriYRhCdiODxPKBD1ZCjPm06bIup57DdSLkon0G~tAdpktn1CRPbLqPHFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="catalogue 2018">
    <PresentationTemplate title="Коллекция 2020" :small="true">
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.
      </p>
      <router-link to="/catalogue">
        <Button2>Посмотреть Коллекцию</Button2>
      </router-link>
    </PresentationTemplate>
  </div>
</template>

<script>

export default {
  name: "SecondCatalogue"
}
</script>

<style scoped>

 .second-catalogue {
   display: flex;
 }

 .image {
   width: 45%;
 }

 .description {
   color: #ffffff;
   font-family: "PT Sans", sans-serif;
   font-size: 12px;
   margin-bottom: 1.5em;
 }
</style>