import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer bg-white dark:bg-black">
        <div>
            Invent client by
            <a href="https://www.sonabel.bf/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">SONABEL</a>
        </div>
    </div>`
})
export class AppFooter {}