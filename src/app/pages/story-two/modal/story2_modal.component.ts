import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { Story2ModalService } from './story2_modal.service';

@Component({
    selector: 'story2-modal',
    templateUrl: 'story2_modal.component.html',
  styleUrls: ['./story2_modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Story2ModalComponent implements OnInit, OnDestroy {
    @Input()
  public id!: string;

    private element: any;

    constructor(private Story2ModalService: Story2ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
            if (el.target.className === 'story2-modal') {
                this.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.Story2ModalService.add(this);
    }

    // remove self from modal service when component is destroyed
    ngOnDestroy(): void {
        this.Story2ModalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('story2-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('story2-modal-open');
    }
}
