<template>
  <div>
    <div class="display-layout">
      <div>DisplayLayout.vue</div>
      <div class="grid1 grid-cols-4 grid-rows-2 items-end center-content">
        <div class="grid1 grid-cols4 grid-rows-2">
          <!-- LARGE WINDOW -->
            <div class="col col-start-1 row-start-1">
              <Window size="60" width="60">
                {{ tickets[0]?.ticket_no ? tickets[0]?.ticket_no : null }}
              </Window>
            </div>
          <!-- BELOW THE LARGE WINDOW -->
            <div class="col col-start-1 row-start-2">
              <Window width="60">
                {{ tickets[1]?.ticket_no ? tickets[1]?.ticket_no : null }}
              </Window>
            </div>

          <!-- WINDOW 2 to 5 -->
            <div class="col col-start-2 row-start-2">
              <Window>
                {{ tickets[2]?.ticket_no ? tickets[2]?.ticket_no : null }}
              </Window>
            </div>
            <div class="col col-start-3 row-start-2">
              <Window>
                {{ tickets[3]?.ticket_no ? tickets[3]?.ticket_no : null }}
              </Window>
            </div>
            <div class="col col-start-4 row-start-2">
              <Window>
                {{ tickets[4]?.ticket_no ? tickets[4]?.ticket_no : null }}
              </Window>
            </div>
            <div class="col col-start-5 row-start-4">
              <Window>
                {{ tickets[5]?.ticket_no ? tickets[5]?.ticket_no : null }}
              </Window>
            </div>
        </div>
        <div class="grid1 grid-cols-1">
          <div class="grid1 grid-cols-1 grid-rows-3 items-end center-content">
            <!-- WINDOW 6 to 8 -->
              <div class="dynamic col col-start-1 row-start-3">
                <Window>
                  {{ tickets[6]?.ticket_no ? tickets[6]?.ticket_no : null }}
                </Window>
              </div>
              <div class="dynamic col col-start-1 row-start-2">
                <Window>
                  {{ tickets[7]?.ticket_no ? tickets[7]?.ticket_no : null }}
                </Window>
              </div>
              <div class="dynamic col col-start-1 row-start-1">
                <Window>
                  {{ tickets[8]?.ticket_no ? tickets[8]?.ticket_no : null }}
                </Window>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Window from "../components/Window.vue";
</script>

<script>
export default {
  data(){
    return {
      ticket: null,
    }
  },
  props: ['tickets']
}
</script>

<style scoped>
.display-layout {
  border: 0.2vh solid #000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: flex-end;
}

.grid1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.grid-rows-2 > * {
  grid-row: span 2;
}

@media (min-width: 203vh) {
 .dynamic.col-start-1.row-start-3{
    grid-row-start: 4;
    grid-column-start: 2;
  }
  .dynamic.col-start-1.row-start-2{
    grid-row-start: 4;
    grid-column-start: 3;
  }
  .dynamic.col-start-1.row-start-1{
    grid-row-start: 4;
    grid-column-start: 4;
  }
}
</style>
