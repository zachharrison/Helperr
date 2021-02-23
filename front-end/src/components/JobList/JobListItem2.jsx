import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Example() {
  return (
    <div>
      <Accordion allowZeroExpanded>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
           
                  <div className="item-row-2">
                    <h1>Babysit a lil Brat</h1>
                    <div className="pay">
                      <p className="rate">$10/hr</p>
                    </div>
                  </div>
             
                  <div className="accordion-category">Caregiving</div>
                    
             
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      Is free will real or just an illusion?
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur
                      ea in ut nostrud velit in irure cillum tempor laboris
                      sed adipisicing eu esse duis nulla non.
                  </p>
              </AccordionItemPanel>
          </AccordionItem>
      </Accordion>
      </div>
  );
}